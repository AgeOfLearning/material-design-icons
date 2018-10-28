import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFiberSmartRecordElement
 * @class IconTwotoneFiberSmartRecordElement
 * @extends {AoflElement}
 */
class IconTwotoneFiberSmartRecordElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFiberSmartRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fiber-smart-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFiberSmartRecordElement.is, IconTwotoneFiberSmartRecordElement);

export default IconTwotoneFiberSmartRecordElement;
