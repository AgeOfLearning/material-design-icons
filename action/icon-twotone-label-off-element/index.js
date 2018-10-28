import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLabelOffElement
 * @class IconTwotoneLabelOffElement
 * @extends {AoflElement}
 */
class IconTwotoneLabelOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLabelOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-label-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLabelOffElement.is, IconTwotoneLabelOffElement);

export default IconTwotoneLabelOffElement;
