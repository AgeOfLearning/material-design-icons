import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFiberSmartRecordElement
 * @class IconOutlineFiberSmartRecordElement
 * @extends {AoflElement}
 */
class IconOutlineFiberSmartRecordElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFiberSmartRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fiber-smart-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFiberSmartRecordElement.is, IconOutlineFiberSmartRecordElement);

export default IconOutlineFiberSmartRecordElement;
