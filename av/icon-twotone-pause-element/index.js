import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePauseElement
 * @class IconTwotonePauseElement
 * @extends {AoflElement}
 */
class IconTwotonePauseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePauseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pause';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePauseElement.is, IconTwotonePauseElement);

export default IconTwotonePauseElement;
