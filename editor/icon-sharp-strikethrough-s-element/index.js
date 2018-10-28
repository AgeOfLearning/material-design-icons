import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStrikethroughSElement
 * @class IconSharpStrikethroughSElement
 * @extends {AoflElement}
 */
class IconSharpStrikethroughSElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStrikethroughSElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-strikethrough-s';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStrikethroughSElement.is, IconSharpStrikethroughSElement);

export default IconSharpStrikethroughSElement;
