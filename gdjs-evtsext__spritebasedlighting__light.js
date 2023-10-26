
gdjs.evtsExt__SpriteBasedLighting__Light = gdjs.evtsExt__SpriteBasedLighting__Light || {};

/**
 * Behavior generated from Light
 */
gdjs.evtsExt__SpriteBasedLighting__Light.Light = class Light extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteBasedLighting__Light.Light.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Light
 */
gdjs.evtsExt__SpriteBasedLighting__Light.Light.SharedData = class LightSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteBasedLighting__Light.Light.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteBasedLighting_LightSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteBasedLighting_LightSharedData = new gdjs.evtsExt__SpriteBasedLighting__Light.Light.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteBasedLighting_LightSharedData;
}

// Methods:

gdjs.evtsExt__SpriteBasedLighting__Light.Light.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SpriteBasedLighting::Light", gdjs.evtsExt__SpriteBasedLighting__Light.Light);
