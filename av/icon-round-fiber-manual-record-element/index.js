import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFiberManualRecordElement
 * @class IconRoundFiberManualRecordElement
 * @extends {AoflElement}
 */
class IconRoundFiberManualRecordElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFiberManualRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fiber-manual-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFiberManualRecordElement.is, IconRoundFiberManualRecordElement);

export default IconRoundFiberManualRecordElement;
