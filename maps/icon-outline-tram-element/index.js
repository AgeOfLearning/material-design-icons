import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTramElement
 * @class IconOutlineTramElement
 * @extends {AoflElement}
 */
class IconOutlineTramElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTramElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tram';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTramElement.is, IconOutlineTramElement);

export default IconOutlineTramElement;
