import {Axis, Color4, InstancedMesh, Mesh, MeshBuilder, Scene, Space, StandardMaterial, Vector3} from "@babylonjs/core";

class car {
  private _top: Vector3;
  private _wheelFrontLeft: Vector3;
  private _wheelFrontRight: Vector3;
  private _wheelBackLeft: Vector3;
  private _wheelBackRight: Vector3;
  private _pivotLeft: Vector3;
  private _pivotRight: Vector3;
  private _pivotZ: number;
  private _topNew: Vector3;
  _topCar: Mesh | any;
  _wheelFL: Mesh | any;
  _wheelFR: InstancedMesh | any;
  _wheelBL: InstancedMesh | any;
  _wheelBR: InstancedMesh | any;
  _pivotL: Mesh | any;
  _pivotR: Mesh | any;
  _pivot: Mesh | any;

  constructor(theTop: Vector3, theWheelFL: Vector3, theWheelFR: Vector3, theWheelBL: Vector3, theWheelBR: Vector3, thePivotLeft: Vector3,
              thePivotRight: Vector3, thePivotZ: number, theTopNew: Vector3, theTopCar?: Mesh, theWheelFLMesh?: Mesh,
              theWheelFRMesh?: InstancedMesh, theWheelBLMesh?: InstancedMesh, theWheelBRMesh?: InstancedMesh, thePivotL?: Mesh,
              thePivotR?: Mesh, thePivot?: Mesh) {
    this._top = theTop;
    this._wheelFrontLeft = theWheelFL;
    this._wheelFrontRight = theWheelFR;
    this._wheelBackLeft = theWheelBL;
    this._wheelBackRight = theWheelBR;
    this._pivotLeft = thePivotLeft;
    this._pivotRight = thePivotRight;
    this._pivotZ = thePivotZ;
    this._topNew = theTopNew;
    this._topCar = theTopCar;
    this._wheelFL = theWheelFLMesh;
    this._wheelFR = theWheelFRMesh;
    this._wheelBL = theWheelBLMesh;
    this._wheelBR = theWheelBRMesh;
    this._pivotL = thePivotL;
    this._pivotR = thePivotR;
    this._pivot = thePivot;
  }

  createTop (theHeight: number, theWidth: number, theDepth: number, name: string, position: Vector3, material: StandardMaterial) {
    this._topCar = MeshBuilder.CreateBox(name, { height: theHeight, width: theWidth, depth: theDepth });
    this._topCar.position = position;
    this._topCar.material = material;
    return this._topCar;
  }

  createTube (tubeRadius: number, name: string, path: Vector3[], material: StandardMaterial, parent: Mesh, scn: Scene) {
    const tube: Mesh = MeshBuilder.CreateTube(name, {path: path, radius: tubeRadius, sideOrientation: Mesh.DOUBLESIDE}, scn);
    tube.material = material;
    tube.parent = parent;
    return tube;
  }

  createPivot(name: string, diameter: number, scn: Scene, positionZ: number) {
    this._pivot = MeshBuilder.CreateSphere(name, {diameter: diameter}, scn);
    this._pivot.position.z = positionZ;
    return this._pivot;
  }

  createFrontPivotL (name: string, scn: Scene, parent: Mesh, position: Vector3) {
    this._pivotL = new Mesh(name, scn);
    this._pivotL.parent = parent;
    this._pivotL.position = position;
    return this._pivotL;
  }

  createFrontPivotR (name: string, scn: Scene, parent: Mesh, position: Vector3) {
    this._pivotR = new Mesh(name, scn);
    this._pivotR.parent = parent;
    this._pivotR.position = position;
    return this._pivotR;
  }

  createFirstWheel (wheelDiameter: number, wheelHeight: number, wheelTessellation: number, wheelColor: Color4[], name: string, scn: Scene,
                    material: StandardMaterial, parent: Mesh, position: Vector3) {
    this._wheelFL = MeshBuilder.CreateCylinder(name, {diameter: wheelDiameter, height: wheelHeight, tessellation: wheelTessellation,
      faceColors: wheelColor}, scn);
    this._wheelFL.material = material;
    this._wheelFL.rotate(Axis.X, Math.PI/2, Space.WORLD);
    this._wheelFL.parent = parent;
    this._wheelFL.position = position;
    return this._wheelFL;
  }

  createFRWheel (wheelFrom: Mesh, name: string, parent: any, position: Vector3) {
    this._wheelFR = wheelFrom.createInstance(name);
    this._wheelFR.parent = parent;
    this._wheelFR.position = position;
    return this._wheelFR;
  }

  createBLWheel (wheelFrom: Mesh, name: string, parent: any, position: Vector3) {
    this._wheelBL = wheelFrom.createInstance(name);
    this._wheelBL.parent = parent;
    this._wheelBL.position = position;
    return this._wheelBL;
  }

  createBRWheel (wheelFrom: Mesh, name: string, parent: any, position: Vector3) {
    this._wheelBR = wheelFrom.createInstance(name);
    this._wheelBR.parent = parent;
    this._wheelBR.position = position;
    return this._wheelBR;
  }

  get topCar(): Mesh | any {
    return this._topCar;
  }

  get wheelFL(): Mesh | any {
    return this._wheelFL;
  }

  get wheelFR(): InstancedMesh | any {
    return this._wheelFR;
  }

  get wheelBL(): InstancedMesh | any {
    return this._wheelBL;
  }

  get wheelBR(): InstancedMesh | any {
    return this._wheelBR;
  }

  get pivotL(): Mesh | any {
    return this._pivotL;
  }

  get pivotR(): Mesh | any {
    return this._pivotR;
  }

  get pivot(): Mesh | any {
    return this._pivot;
  }

  get top(): Vector3 {
    return this._top;
  }

  get wheelFrontLeft(): Vector3 {
    return this._wheelFrontLeft;
  }

  get wheelFrontRight(): Vector3 {
    return this._wheelFrontRight;
  }

  get wheelBackLeft(): Vector3 {
    return this._wheelBackLeft;
  }

  get wheelBackRight(): Vector3 {
    return this._wheelBackRight;
  }

  get pivotLeft(): Vector3 {
    return this._pivotLeft;
  }

  get pivotRight(): Vector3 {
    return this._pivotRight;
  }

  get pivotZ(): number {
    return this._pivotZ;
  }

  get topNew(): Vector3 {
    return this._topNew;
  }
}

export = car;