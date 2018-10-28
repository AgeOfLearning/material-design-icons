import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLandscapeElement
 * @class IconTwotoneLandscapeElement
 * @extends {AoflElement}
 */
class IconTwotoneLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLandscapeElement.is, IconTwotoneLandscapeElement);

export default IconTwotoneLandscapeElement;
