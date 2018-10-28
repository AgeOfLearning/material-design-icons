import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLandscapeElement
 * @class IconOutlineLandscapeElement
 * @extends {AoflElement}
 */
class IconOutlineLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLandscapeElement.is, IconOutlineLandscapeElement);

export default IconOutlineLandscapeElement;
