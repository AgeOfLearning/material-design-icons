import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpeakerElement
 * @class IconTwotoneSpeakerElement
 * @extends {AoflElement}
 */
class IconTwotoneSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpeakerElement.is, IconTwotoneSpeakerElement);

export default IconTwotoneSpeakerElement;
