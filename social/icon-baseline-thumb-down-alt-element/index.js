import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineThumbDownAltElement
 * @class IconBaselineThumbDownAltElement
 * @extends {AoflElement}
 */
class IconBaselineThumbDownAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineThumbDownAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-thumb-down-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineThumbDownAltElement.is, IconBaselineThumbDownAltElement);

export default IconBaselineThumbDownAltElement;
