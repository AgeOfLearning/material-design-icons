import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHowToRegElement
 * @class IconBaselineHowToRegElement
 * @extends {AoflElement}
 */
class IconBaselineHowToRegElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHowToRegElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-how-to-reg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHowToRegElement.is, IconBaselineHowToRegElement);

export default IconBaselineHowToRegElement;
