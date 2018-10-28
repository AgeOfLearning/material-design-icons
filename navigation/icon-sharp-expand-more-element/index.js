import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExpandMoreElement
 * @class IconSharpExpandMoreElement
 * @extends {AoflElement}
 */
class IconSharpExpandMoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExpandMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-expand-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExpandMoreElement.is, IconSharpExpandMoreElement);

export default IconSharpExpandMoreElement;
