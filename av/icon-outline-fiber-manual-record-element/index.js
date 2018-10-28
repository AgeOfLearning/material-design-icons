import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFiberManualRecordElement
 * @class IconOutlineFiberManualRecordElement
 * @extends {AoflElement}
 */
class IconOutlineFiberManualRecordElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFiberManualRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fiber-manual-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFiberManualRecordElement.is, IconOutlineFiberManualRecordElement);

export default IconOutlineFiberManualRecordElement;
