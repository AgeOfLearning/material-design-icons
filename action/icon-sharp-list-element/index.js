import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpListElement
 * @class IconSharpListElement
 * @extends {AoflElement}
 */
class IconSharpListElement extends AoflElement {
  /**
   * Creates an instance of IconSharpListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpListElement.is, IconSharpListElement);

export default IconSharpListElement;
