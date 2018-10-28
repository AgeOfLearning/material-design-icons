import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddToHomeScreenElement
 * @class IconBaselineAddToHomeScreenElement
 * @extends {AoflElement}
 */
class IconBaselineAddToHomeScreenElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddToHomeScreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-to-home-screen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddToHomeScreenElement.is, IconBaselineAddToHomeScreenElement);

export default IconBaselineAddToHomeScreenElement;
