import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFiberManualRecordElement
 * @class IconSharpFiberManualRecordElement
 * @extends {AoflElement}
 */
class IconSharpFiberManualRecordElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFiberManualRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fiber-manual-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFiberManualRecordElement.is, IconSharpFiberManualRecordElement);

export default IconSharpFiberManualRecordElement;
