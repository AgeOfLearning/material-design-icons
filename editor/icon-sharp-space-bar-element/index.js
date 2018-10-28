import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpaceBarElement
 * @class IconSharpSpaceBarElement
 * @extends {AoflElement}
 */
class IconSharpSpaceBarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpaceBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-space-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpaceBarElement.is, IconSharpSpaceBarElement);

export default IconSharpSpaceBarElement;
