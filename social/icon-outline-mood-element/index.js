import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoodElement
 * @class IconOutlineMoodElement
 * @extends {AoflElement}
 */
class IconOutlineMoodElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoodElement.is, IconOutlineMoodElement);

export default IconOutlineMoodElement;
