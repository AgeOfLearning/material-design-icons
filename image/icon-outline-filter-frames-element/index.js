import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterFramesElement
 * @class IconOutlineFilterFramesElement
 * @extends {AoflElement}
 */
class IconOutlineFilterFramesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterFramesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-frames';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterFramesElement.is, IconOutlineFilterFramesElement);

export default IconOutlineFilterFramesElement;
