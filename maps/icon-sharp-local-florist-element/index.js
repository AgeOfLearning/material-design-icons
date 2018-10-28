import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalFloristElement
 * @class IconSharpLocalFloristElement
 * @extends {AoflElement}
 */
class IconSharpLocalFloristElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalFloristElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-florist';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalFloristElement.is, IconSharpLocalFloristElement);

export default IconSharpLocalFloristElement;
