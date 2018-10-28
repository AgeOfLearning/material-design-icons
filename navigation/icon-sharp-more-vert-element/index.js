import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMoreVertElement
 * @class IconSharpMoreVertElement
 * @extends {AoflElement}
 */
class IconSharpMoreVertElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMoreVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-more-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMoreVertElement.is, IconSharpMoreVertElement);

export default IconSharpMoreVertElement;
