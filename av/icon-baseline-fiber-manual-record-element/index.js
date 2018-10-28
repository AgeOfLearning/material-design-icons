import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFiberManualRecordElement
 * @class IconBaselineFiberManualRecordElement
 * @extends {AoflElement}
 */
class IconBaselineFiberManualRecordElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFiberManualRecordElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fiber-manual-record';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFiberManualRecordElement.is, IconBaselineFiberManualRecordElement);

export default IconBaselineFiberManualRecordElement;
