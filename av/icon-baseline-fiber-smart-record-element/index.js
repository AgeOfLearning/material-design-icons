import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFiberSmartRecordElement
 * @class IconBaselineFiberSmartRecordElement
 * @extends {AoflElement}
 */
class IconBaselineFiberSmartRecordElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFiberSmartRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fiber-smart-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFiberSmartRecordElement.is, IconBaselineFiberSmartRecordElement);

export default IconBaselineFiberSmartRecordElement;
