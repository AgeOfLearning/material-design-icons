import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlayForWorkElement
 * @class IconOutlinePlayForWorkElement
 * @extends {AoflElement}
 */
class IconOutlinePlayForWorkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlayForWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-play-for-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlayForWorkElement.is, IconOutlinePlayForWorkElement);

export default IconOutlinePlayForWorkElement;
