import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlayArrowElement
 * @class IconOutlinePlayArrowElement
 * @extends {AoflElement}
 */
class IconOutlinePlayArrowElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlayArrowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-play-arrow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlayArrowElement.is, IconOutlinePlayArrowElement);

export default IconOutlinePlayArrowElement;
