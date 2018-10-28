import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalBarElement
 * @class IconSharpLocalBarElement
 * @extends {AoflElement}
 */
class IconSharpLocalBarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalBarElement.is, IconSharpLocalBarElement);

export default IconSharpLocalBarElement;
