import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArchiveElement
 * @class IconSharpArchiveElement
 * @extends {AoflElement}
 */
class IconSharpArchiveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-archive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArchiveElement.is, IconSharpArchiveElement);

export default IconSharpArchiveElement;
