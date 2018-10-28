import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePanoramaElement
 * @class IconTwotonePanoramaElement
 * @extends {AoflElement}
 */
class IconTwotonePanoramaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePanoramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-panorama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePanoramaElement.is, IconTwotonePanoramaElement);

export default IconTwotonePanoramaElement;
