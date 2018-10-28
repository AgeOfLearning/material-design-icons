import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTuneElement
 * @class IconTwotoneTuneElement
 * @extends {AoflElement}
 */
class IconTwotoneTuneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTuneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tune';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTuneElement.is, IconTwotoneTuneElement);

export default IconTwotoneTuneElement;
