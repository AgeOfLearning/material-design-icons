import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePausePresentationElement
 * @class IconTwotonePausePresentationElement
 * @extends {AoflElement}
 */
class IconTwotonePausePresentationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePausePresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pause-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePausePresentationElement.is, IconTwotonePausePresentationElement);

export default IconTwotonePausePresentationElement;
