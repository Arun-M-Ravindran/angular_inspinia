import LeavesModule from './leaves'
import LeavesController from './leaves.controller';
import LeavesComponent from './leaves.component';
import LeavesTemplate from './leaves.html';

describe('Leaves', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LeavesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LeavesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(LeavesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LeavesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LeavesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LeavesController);
      });
  });
});
