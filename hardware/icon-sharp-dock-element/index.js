import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDockElement
 * @class IconSharpDockElement
 * @extends {AoflElement}
 */
class IconSharpDockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-dock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDockElement.is, IconSharpDockElement);

export default IconSharpDockElement;
