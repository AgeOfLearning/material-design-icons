import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPolymerElement
 * @class IconSharpPolymerElement
 * @extends {AoflElement}
 */
class IconSharpPolymerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPolymerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-polymer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPolymerElement.is, IconSharpPolymerElement);

export default IconSharpPolymerElement;
