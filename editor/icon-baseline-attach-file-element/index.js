import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAttachFileElement
 * @class IconBaselineAttachFileElement
 * @extends {AoflElement}
 */
class IconBaselineAttachFileElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAttachFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-attach-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAttachFileElement.is, IconBaselineAttachFileElement);

export default IconBaselineAttachFileElement;
