import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExitToAppElement
 * @class IconSharpExitToAppElement
 * @extends {AoflElement}
 */
class IconSharpExitToAppElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExitToAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exit-to-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExitToAppElement.is, IconSharpExitToAppElement);

export default IconSharpExitToAppElement;
