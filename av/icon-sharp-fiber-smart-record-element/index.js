import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFiberSmartRecordElement
 * @class IconSharpFiberSmartRecordElement
 * @extends {AoflElement}
 */
class IconSharpFiberSmartRecordElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFiberSmartRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fiber-smart-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFiberSmartRecordElement.is, IconSharpFiberSmartRecordElement);

export default IconSharpFiberSmartRecordElement;
