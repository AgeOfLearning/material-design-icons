import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStrikethroughSElement
 * @class IconOutlineStrikethroughSElement
 * @extends {AoflElement}
 */
class IconOutlineStrikethroughSElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStrikethroughSElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-strikethrough-s';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStrikethroughSElement.is, IconOutlineStrikethroughSElement);

export default IconOutlineStrikethroughSElement;
