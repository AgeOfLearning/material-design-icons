import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFiberManualRecordElement
 * @class IconTwotoneFiberManualRecordElement
 * @extends {AoflElement}
 */
class IconTwotoneFiberManualRecordElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFiberManualRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fiber-manual-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFiberManualRecordElement.is, IconTwotoneFiberManualRecordElement);

export default IconTwotoneFiberManualRecordElement;
