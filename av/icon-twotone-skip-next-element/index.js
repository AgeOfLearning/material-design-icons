import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSkipNextElement
 * @class IconTwotoneSkipNextElement
 * @extends {AoflElement}
 */
class IconTwotoneSkipNextElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSkipNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-skip-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSkipNextElement.is, IconTwotoneSkipNextElement);

export default IconTwotoneSkipNextElement;
