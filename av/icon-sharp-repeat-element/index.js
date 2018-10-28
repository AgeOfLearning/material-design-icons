import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRepeatElement
 * @class IconSharpRepeatElement
 * @extends {AoflElement}
 */
class IconSharpRepeatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRepeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-repeat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRepeatElement.is, IconSharpRepeatElement);

export default IconSharpRepeatElement;
