import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShuffleElement
 * @class IconBaselineShuffleElement
 * @extends {AoflElement}
 */
class IconBaselineShuffleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShuffleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-shuffle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShuffleElement.is, IconBaselineShuffleElement);

export default IconBaselineShuffleElement;
