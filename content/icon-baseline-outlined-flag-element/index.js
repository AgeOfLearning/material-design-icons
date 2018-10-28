import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOutlinedFlagElement
 * @class IconBaselineOutlinedFlagElement
 * @extends {AoflElement}
 */
class IconBaselineOutlinedFlagElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOutlinedFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-outlined-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOutlinedFlagElement.is, IconBaselineOutlinedFlagElement);

export default IconBaselineOutlinedFlagElement;
