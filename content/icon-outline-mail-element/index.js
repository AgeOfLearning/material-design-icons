import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMailElement
 * @class IconOutlineMailElement
 * @extends {AoflElement}
 */
class IconOutlineMailElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMailElement.is, IconOutlineMailElement);

export default IconOutlineMailElement;
