import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatTextdirectionRToLElement
 * @class IconBaselineFormatTextdirectionRToLElement
 * @extends {AoflElement}
 */
class IconBaselineFormatTextdirectionRToLElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatTextdirectionRToLElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-textdirection-r-to-l';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatTextdirectionRToLElement.is, IconBaselineFormatTextdirectionRToLElement);

export default IconBaselineFormatTextdirectionRToLElement;
