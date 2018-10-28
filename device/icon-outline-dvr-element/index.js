import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDvrElement
 * @class IconOutlineDvrElement
 * @extends {AoflElement}
 */
class IconOutlineDvrElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDvrElement.is, IconOutlineDvrElement);

export default IconOutlineDvrElement;
