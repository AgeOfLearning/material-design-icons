import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMapElement
 * @class IconSharpMapElement
 * @extends {AoflElement}
 */
class IconSharpMapElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMapElement.is, IconSharpMapElement);

export default IconSharpMapElement;
