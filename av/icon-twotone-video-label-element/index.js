import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVideoLabelElement
 * @class IconTwotoneVideoLabelElement
 * @extends {AoflElement}
 */
class IconTwotoneVideoLabelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVideoLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-video-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVideoLabelElement.is, IconTwotoneVideoLabelElement);

export default IconTwotoneVideoLabelElement;
