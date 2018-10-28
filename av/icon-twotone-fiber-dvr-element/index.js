import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFiberDvrElement
 * @class IconTwotoneFiberDvrElement
 * @extends {AoflElement}
 */
class IconTwotoneFiberDvrElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFiberDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fiber-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFiberDvrElement.is, IconTwotoneFiberDvrElement);

export default IconTwotoneFiberDvrElement;
