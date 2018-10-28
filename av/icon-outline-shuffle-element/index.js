import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShuffleElement
 * @class IconOutlineShuffleElement
 * @extends {AoflElement}
 */
class IconOutlineShuffleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShuffleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-shuffle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShuffleElement.is, IconOutlineShuffleElement);

export default IconOutlineShuffleElement;
