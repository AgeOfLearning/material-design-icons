import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShuffleElement
 * @class IconTwotoneShuffleElement
 * @extends {AoflElement}
 */
class IconTwotoneShuffleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShuffleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-shuffle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShuffleElement.is, IconTwotoneShuffleElement);

export default IconTwotoneShuffleElement;
